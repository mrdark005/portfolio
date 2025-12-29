export const revoltScriptDocs = {
    id: 'revolt-script',
    title: 'Revolt Script',
    description: 'A powerful and easy-to-use Revolt.chat API wrapper for Node.js.',
    sections: [
        {
            id: 'intro',
            title: 'Introduction',
            content: `
                <h1 class="text-4xl font-bold mb-4">🚀 revolt-script</h1>
                <p class="mb-4 text-gray-300">A powerful, modular, and easy-to-use Revolt.chat API wrapper for Node.js. Build feature-rich bots with minimal code.</p>
                <div class="flex gap-2 mb-8">
                    <img src="https://img.shields.io/npm/v/revolt-script.svg" alt="npm version" />
                    <img src="https://img.shields.io/badge/License-ISC-blue.svg" alt="License" />
                </div>
            `
        },
        {
            id: 'installation',
            title: 'Installation',
            content: `
                <h2 class="text-2xl font-bold mb-4" id="installation">📦 Installation</h2>
                <div class="bg-black/50 p-4 rounded-lg mb-8">
                    <pre class="text-gray-300 font-mono"><code>npm install revolt-script</code></pre>
                </div>
            `
        },
        {
            id: 'client',
            title: 'Client API',
            type: 'accordion',
            subsections: [
                { id: 'client-methods', title: 'Methods' },
                { id: 'client-props', title: 'Properties' }
            ],
            items: [
                {
                    id: 'client-login',
                    label: 'login(token)',
                    description: 'Authenticate and connect the bot to Revolt.',
                    usage: `await client.login('YOUR_BOT_TOKEN');`
                },
                {
                    id: 'client-destroy',
                    label: 'destroy()',
                    description: 'Disconnect the bot and cleanup resources.',
                    usage: `await client.destroy();`
                },
                {
                    id: 'client-user',
                    label: 'client.user',
                    description: 'The bot\'s user object (ClientUser).',
                    usage: `console.log(client.user.tag);`
                },
                {
                    id: 'client-users',
                    label: 'client.users',
                    description: 'UserManager for caching and fetching users.',
                    usage: `const user = await client.users.fetch('ID');`
                },
                {
                    id: 'client-channels',
                    label: 'client.channels',
                    description: 'ChannelManager for caching and fetching channels.',
                    usage: `const channel = client.channels.get('ID');`
                },
                {
                    id: 'client-servers',
                    label: 'client.servers',
                    description: 'ServerManager for caching and fetching servers.',
                    usage: `console.log(client.servers.cache.size);`
                },
                {
                    id: 'client-readyAt',
                    label: 'client.readyAt',
                    description: 'Timestamp when bot became ready.',
                    usage: `console.log(client.readyAt);`
                }
            ]
        },
        {
            id: 'events',
            title: 'Events',
            type: 'accordion',
            subsections: [
                { id: 'evt-ready', title: 'Ready' },
                { id: 'evt-msg', title: 'Message Events' },
                { id: 'evt-chan', title: 'Channel Events' },
                { id: 'evt-srv', title: 'Server Events' },
                { id: 'evt-user', title: 'User/Member Events' },
                { id: 'evt-err', title: 'Errors' }
            ],
            items: [
                {
                    id: 'evt-ready',
                    label: 'READY',
                    description: 'Emitted when the bot is ready.',
                    usage: `client.on('ready', () => console.log('Bot is ready!'));`
                },
                {
                    id: 'evt-msg',
                    label: 'MESSAGE',
                    description: 'Emitted when a message is received.',
                    usage: `client.on('message', (msg) => console.log(msg.content));`
                },
                {
                    id: 'evt-msg-upd',
                    label: 'MESSAGE_UPDATE',
                    description: 'Emitted when a message is edited.',
                    usage: `client.on('messageUpdate', (data) => ...);`
                },
                {
                    id: 'evt-msg-del',
                    label: 'MESSAGE_DELETE',
                    description: 'Emitted when a message is deleted.',
                    usage: `client.on('messageDelete', (data) => ...);`
                },
                {
                    id: 'evt-chan-create',
                    label: 'CHANNEL_CREATE',
                    description: 'Emitted when a channel is created.',
                    usage: `client.on('channelCreate', (channel) => ...);`
                },
                {
                    id: 'evt-chan-upd',
                    label: 'CHANNEL_UPDATE',
                    description: 'Emitted when a channel is updated.',
                    usage: `client.on('channelUpdate', (data) => ...);`
                },
                {
                    id: 'evt-chan-del',
                    label: 'CHANNEL_DELETE',
                    description: 'Emitted when a channel is deleted.',
                    usage: `client.on('channelDelete', (data) => ...);`
                },
                {
                    id: 'evt-srv-create',
                    label: 'SERVER_CREATE',
                    description: 'Emitted when the bot joins/creates a server.',
                    usage: `client.on('serverCreate', (server) => ...);`
                },
                {
                    id: 'evt-srv-upd',
                    label: 'SERVER_UPDATE',
                    description: 'Emitted when a server is updated.',
                    usage: `client.on('serverUpdate', (data) => ...);`
                },
                {
                    id: 'evt-srv-del',
                    label: 'SERVER_DELETE',
                    description: 'Emitted when a server is deleted/left.',
                    usage: `client.on('serverDelete', (data) => ...);`
                },
                {
                    id: 'evt-mem-join',
                    label: 'MEMBER_JOIN',
                    description: 'Emitted when a user joins a server.',
                    usage: `client.on('memberJoin', (data) => ...);`
                },
                {
                    id: 'evt-mem-leave',
                    label: 'MEMBER_LEAVE',
                    description: 'Emitted when a user leaves a server.',
                    usage: `client.on('memberLeave', (data) => ...);`
                },
                {
                    id: 'evt-error',
                    label: 'error',
                    description: 'Emitted when an error occurs.',
                    usage: `client.on('error', (err) => console.error(err));`
                }
            ]
        },
        {
            id: 'structures',
            title: 'Structures',
            type: 'accordion',
            subsections: [
                { id: 'struct-msg', title: 'Message' },
                { id: 'struct-user', title: 'User' },
                { id: 'struct-chan', title: 'Channel' },
                { id: 'struct-srv', title: 'Server' },
                { id: 'struct-embed', title: 'EmbedBuilder' }
            ],
            items: [
                {
                    id: 'msg-props',
                    label: 'Message Properties',
                    description: 'Key properties: `id`, `content`, `author`, `channel`, `attachments`',
                    usage: `console.log(message.id, message.content);`
                },
                {
                    id: 'msg-reply',
                    label: 'Message.reply(content)',
                    description: 'Quickly reply to a message.',
                    usage: `await message.reply("Hello!");`
                },
                {
                    id: 'msg-channel-send',
                    label: 'channel.sendMessage(content, attachments, repliesTo, embeds)',
                    description: 'Send a message to a channel.',
                    usage: `await channel.sendMessage('Hello', [], null, [embed]);`
                },
                {
                    id: 'user-fetchProfile',
                    label: 'User.fetchProfile()',
                    description: 'Fetch detailed user profile.',
                    usage: `const profile = await user.fetchProfile();`
                },
                {
                    id: 'user-openDM',
                    label: 'User.openDM()',
                    description: 'Open a DM channel with the user.',
                    usage: `const dm = await user.openDM();`
                },
                {
                    id: 'server-fetchMembers',
                    label: 'Server.fetchMembers()',
                    description: 'Fetch all members of the server.',
                    usage: `const members = await server.fetchMembers();`
                },
                {
                    id: 'server-leave',
                    label: 'Server.leave()',
                    description: 'Leave the server.',
                    usage: `await server.leave();`
                },
                {
                    id: 'embed-builder',
                    label: 'EmbedBuilder',
                    description: 'Class for creating rich embeds.',
                    usage: `const embed = new EmbedBuilder()\n  .setTitle('Title')\n  .setDescription('Desc')\n  .setColour('#ff0000')\n  .build();`
                }
            ]
        }
    ]
};
