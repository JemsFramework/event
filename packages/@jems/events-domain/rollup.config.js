import rollupTypescript from 'rollup-plugin-typescript2'
import os from 'os'
 
export default {
  entry: 'src/index.ts',
  format: 'umd',
  plugins: [
    rollupTypescript({
      cacheRoot: os.tmpdir(),  
      tsconfig: '../../../tsconfig.json',
      include: 'src'
    })
  ]
}