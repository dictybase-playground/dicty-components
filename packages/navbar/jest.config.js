module.exports = {
  roots: ["./"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePathIgnorePatterns: ["test/__fixtures__", "node_modules", "dist"],
  preset: "ts-jest",
}
