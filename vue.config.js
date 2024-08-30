// vue.config.js
module.exports = {
  chainWebpack: config => {
    // Adiciona uma regra para arquivos PDF
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[ext]',
        outputPath: 'assets/pdfs/',
      });
  }
};
