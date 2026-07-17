interface Searchable {
  category: string
  label: string
  keywords?: string[]
}

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

// Distance d'édition, pour tolérer les fautes de frappe sur les mots un peu longs
function levenshtein(a: string, b: string): number {
  const rows = a.length + 1
  const cols = b.length + 1
  const dp: number[][] = Array.from({ length: rows }, () => new Array(cols).fill(0))

  for (let i = 0; i < rows; i++) dp[i][0] = i
  for (let j = 0; j < cols; j++) dp[0][j] = j

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    }
  }

  return dp[a.length][b.length]
}

function tokenScore(queryToken: string, haystackTokens: string[]): number {
  let best = 0
  for (const token of haystackTokens) {
    if (token === queryToken) return 3
    if (token.length > 2 && (token.includes(queryToken) || queryToken.includes(token))) {
      best = Math.max(best, 2)
      continue
    }
    const maxLen = Math.max(token.length, queryToken.length)
    if (maxLen >= 4) {
      const tolerance = maxLen <= 5 ? 1 : 2
      if (levenshtein(queryToken, token) <= tolerance) best = Math.max(best, 1)
    }
  }
  return best
}

/**
 * Recherche floue, tolérante aux fautes et aux synonymes (`keywords`), sur un
 * petit jeu de données fixe. Pas de vraie compréhension sémantique : juste du
 * matching par tokens + distance d'édition, suffisant vu le nombre d'entrées.
 */
export function searchServices<T extends Searchable>(query: string, items: T[], limit = 5): T[] {
  const queryTokens = normalize(query).split(" ").filter((t) => t.length > 1)
  if (queryTokens.length === 0) return []

  const scored = items.map((item) => {
    const haystackTokens = normalize([item.category, item.label, ...(item.keywords ?? [])].join(" ")).split(" ")
    const score = queryTokens.reduce((sum, token) => sum + tokenScore(token, haystackTokens), 0)
    return { item, score }
  })

  return scored
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.item)
}
