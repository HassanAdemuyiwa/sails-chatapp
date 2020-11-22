/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: async function(req, res){
        await res.json({ 
        title: 'my article',
        body: 'article body'
        }); 
    } 
};

