class CopyrightWebpackPlugin {
  // constructor(options) {
  //   console.log(options)
  // }

  // compiler: webpack实例，包含配置信息
  apply(compiler) {
    // 同步
    compiler.hooks.compile.tap(
      'CopyrightWebpackPlugin',
      (compilation) => {
        console.log('开始')
      }
    ),

    // 异步
    compiler.hooks.emit.tapAsync(
      'CopyrightWebpackPlugin',
      (compilation, cb) => {
        compilation.assets['test.txt'] = {
          source: () => {
            return 'hello txt';
          },
          size: () => {
            return 10;
          }
        },
        cb();
      }
    )
  }
}

module.exports = CopyrightWebpackPlugin;