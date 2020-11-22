module.exports = {


    friendlyName: 'View chatroom',
  
  
    description: 'Display the dashboard "chatroom" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/chatroom',
        description: 'Display the chatroomfor authenticated users.'
      },
  
    },
  
  
    fn: async function () {
  
      return {};
  
    }
  
  
  };
  