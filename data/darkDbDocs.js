export const darkDbDocs = {
    id: 'darkdb',
    title: 'Dark.db',
    description: 'A lightweight, versatile, and high-performance database for Node.js.',
    sections: [
        {
            id: 'intro',
            title: 'Introduction',
            content: `
                 <h1 class="text-4xl font-bold mb-4">🌑 DarkDB</h1>
                <p class="mb-4 text-gray-300">A lightweight, versatile, and high-performance database for Node.js. It supports various formats (JSON, YAML, TOML, Binary), atomic writes, sharding, and advanced querying.</p>
                <div class="flex gap-2 mb-8">
                    <img src="https://img.shields.io/npm/v/darkdb.svg" alt="npm version" />
                    <img src="https://img.shields.io/npm/dt/darkdb.svg" alt="Downloads" />
                </div>
            `
        },
        {
            id: 'features',
            title: '✨ Features',
            content: `
                 <h2 class="text-3xl font-bold mb-6 text-purple-400">✨ Features</h2>
                 <ul class="space-y-3 text-gray-300">
                    <li class="flex items-start"><span class="mr-2">📦</span> <span>Store data in <strong>JSON, YAML, TOML or BINARY</strong> files.</span></li>
                    <li class="flex items-start"><span class="mr-2">🔍</span> <span><strong>Advanced search</strong> with full indexing.</span></li>
                    <li class="flex items-start"><span class="mr-2">⚡</span> <span><strong>Query engine</strong> with operators: <code>$eq</code>, <code>$ne</code>, <code>$gt</code>, <code>$gte</code>, <code>$lt</code>, <code>$lte</code>, <code>$in</code>, <code>$nin</code>, <code>$regex</code>, <code>$and</code>, <code>$or</code>, <code>$not</code>.</span></li>
                    <li class="flex items-start"><span class="mr-2">🔐</span> <span><strong>Transaction support</strong> for atomic multi-step operations.</span></li>
                    <li class="flex items-start"><span class="mr-2">🎯</span> <span>Nested path access with <code>.</code> separator (e.g., <code>user.profile.age</code>).</span></li>
                    <li class="flex items-start"><span class="mr-2">🏎️</span> <span><strong>Core operations</strong>: <code>set</code>, <code>get</code>, <code>delete</code>, <code>has</code>, <code>all</code>, <code>deleteAll</code>.</span></li>
                     <li class="flex items-start"><span class="mr-2">🔢</span> <span><strong>Number operations</strong>: <code>add</code>, <code>remove</code>, <code>incr</code>, <code>decr</code>.</span></li>
                    <li class="flex items-start"><span class="mr-2">🍔</span> <span><strong>Array operations</strong>: <code>push</code>, <code>unpush</code>.</span></li>
                    <li class="flex items-start"><span class="mr-2">⏳</span> <span><strong>TTL (time-to-live)</strong> with automatic expiry.</span></li>
                    <li class="flex items-start"><span class="mr-2">💾</span> <span><strong>Backup & restore</strong> support.</span></li>
                    <li class="flex items-start"><span class="mr-2">📡</span> <span><strong>Event system</strong> (listen to <code>set</code>, <code>delete</code>, <code>reset</code>, <code>change</code>).</span></li>
                     <li class="flex items-start"><span class="mr-2">🛡️</span> <span><strong>Journaling & crash-safe saves</strong> with atomic writes.</span></li>
                    <li class="flex items-start"><span class="mr-2">⏱️</span> <span><strong>Debounced writes</strong> for performance.</span></li>
                    <li class="flex items-start"><span class="mr-2">🌐</span> <span><strong>Sharding support</strong> for very large datasets.</span></li>
                    <li class="flex items-start"><span class="mr-2">📑</span> <span><strong>Configurable Indexing</strong> (index any field).</span></li>
                    <li class="flex items-start"><span class="mr-2">✅</span> <span><strong>Schema Validation</strong> (enforce types).</span></li>
                    <li class="flex items-start"><span class="mr-2">🎣</span> <span><strong>Hooks/Middleware</strong> (<code>pre</code> and <code>post</code> events).</span></li>
                    <li class="flex items-start"><span class="mr-2">🚀</span> <span><strong>Advanced Querying</strong> (sort, limit, skip).</span></li>
                 </ul>
            `
        },
        {
            id: 'options',
            title: 'Configuration Options',
            content: `
                <h2 class="text-2xl font-bold mb-4" id="options">🛠 Configuration Options</h2>
                <div class="overflow-x-auto mb-6">
                    <table class="w-full text-left text-gray-300 border-collapse">
                        <thead>
                            <tr class="border-b border-gray-700 bg-black/30">
                                <th class="py-3 px-4 font-semibold text-blue-400">Option</th>
                                <th class="py-3 px-4 font-semibold text-green-400">Default</th>
                                <th class="py-3 px-4 font-semibold">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-800 hover:bg-white/5">
                                <td class="py-2 px-4 font-mono">name</td>
                                <td class="py-2 px-4 font-mono text-gray-400">'darkdb'</td>
                                <td class="py-2 px-4">Database file name</td>
                            </tr>
                            <tr class="border-b border-gray-800 hover:bg-white/5">
                                <td class="py-2 px-4 font-mono">dir</td>
                                <td class="py-2 px-4 font-mono text-gray-400">'.'</td>
                                <td class="py-2 px-4">Directory to store files</td>
                            </tr>
                            <tr class="border-b border-gray-800 hover:bg-white/5">
                                <td class="py-2 px-4 font-mono">format</td>
                                <td class="py-2 px-4 font-mono text-gray-400">'json'</td>
                                <td class="py-2 px-4">File format: <code>json</code>, <code>yaml</code>, <code>toml</code>, or <code>binary</code></td>
                            </tr>
                            <tr class="border-b border-gray-800 hover:bg-white/5">
                                <td class="py-2 px-4 font-mono">separator</td>
                                <td class="py-2 px-4 font-mono text-gray-400">'.'</td>
                                <td class="py-2 px-4">Separator for nested keys</td>
                            </tr>
                             <tr class="border-b border-gray-800 hover:bg-white/5">
                                <td class="py-2 px-4 font-mono">autoFile</td>
                                <td class="py-2 px-4 font-mono text-gray-400">true</td>
                                <td class="py-2 px-4">Save automatically to file</td>
                            </tr>
                             <tr class="border-b border-gray-800 hover:bg-white/5">
                                <td class="py-2 px-4 font-mono">atomic</td>
                                <td class="py-2 px-4 font-mono text-gray-400">true</td>
                                <td class="py-2 px-4">Use atomic file writes</td>
                            </tr>
                             <tr class="border-b border-gray-800 hover:bg-white/5">
                                <td class="py-2 px-4 font-mono">shard</td>
                                <td class="py-2 px-4 font-mono text-gray-400">false</td>
                                <td class="py-2 px-4">Enable sharding</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            id: 'config-examples',
            title: '🛠 Configuration Examples',
            type: 'accordion',
            items: [
                {
                    id: 'basic-config',
                    label: 'Basic Configuration',
                    description: 'Standard setup with default options.',
                    usage: `const DarkDB = require("darkdb");

const db = new DarkDB({
  name: "darkdb",
  separator: ".",
  autoFile: true,
  jsonSpaces: 4
});`
                },
                {
                    id: 'indexed-config',
                    label: 'With Indexing',
                    description: 'Enable indexing on specific fields for faster searches.',
                    usage: `const dbIndexed = new DarkDB({
  name: "indexed_db",
  indexFields: ["name", "role", "email"]
});`
                },
                {
                    id: 'schema-config',
                    label: 'With Schema Validation',
                    description: 'Enforce data types for consistency.',
                    usage: `// Schema Validation
const dbSchema = new DarkDB({
  name: "schema_db",
  schema: {
    name: String,
    age: Number,
    active: Boolean
  }
});`
                }
            ]
        },
        {
            id: 'api-methods',
            title: '🔑 API Methods',
            type: 'accordion',
            subsections: [
                { id: 'set', title: 'Core Ops' },
                { id: 'push', title: 'Array Ops' },
                { id: 'add', title: 'Number Ops' },
                { id: 'keys', title: 'Iteration' },
                { id: 'search', title: 'Search/Query' },
                { id: 'util', title: 'Utility' }
            ],
            items: [
                {
                    id: 'set',
                    label: 'set(path, value, options?)',
                    description: 'Store a value at the specified path.',
                    usage: `await db.set("user.name", "Alice");`
                },
                {
                    id: 'get',
                    label: 'get(path, defaultValue?)',
                    description: 'Retrieve a value from the database.',
                    usage: `const name = await db.get("user.name", "Unknown");`
                },
                {
                    id: 'delete',
                    label: 'delete(path)',
                    description: 'Remove a key or path from the database.',
                    usage: `await db.delete("user.name");`
                },
                {
                    id: 'has',
                    label: 'has(path)',
                    description: 'Check if a key exists.',
                    usage: `if (await db.has("user.name")) ...`
                },
                {
                    id: 'all',
                    label: 'all()',
                    description: 'Retrieve the entire database object.',
                    usage: `const data = await db.all();`
                },
                {
                    id: 'deleteAll',
                    label: 'deleteAll()',
                    description: 'Clear the entire database.',
                    usage: `await db.deleteAll();`
                },
                {
                    id: 'push',
                    label: 'push(path, value)',
                    description: 'Add an element to an array.',
                    usage: `await db.push("users", "Alice");`
                },
                {
                    id: 'unpush',
                    label: 'unpush(path, value)',
                    description: 'Remove an element from an array.',
                    usage: `await db.unpush("users", "Alice");`
                },
                {
                    id: 'add',
                    label: 'add(path, number)',
                    description: 'Add to a number value.',
                    usage: `await db.add("score", 10);`
                },
                {
                    id: 'remove',
                    label: 'remove(path, number)',
                    description: 'Subtract from a number value.',
                    usage: `await db.remove("score", 5);`
                },
                {
                    id: 'incr',
                    label: 'incr(path)',
                    description: 'Increment a number by 1.',
                    usage: `await db.incr("visits");`
                },
                {
                    id: 'decr',
                    label: 'decr(path)',
                    description: 'Decrement a number by 1.',
                    usage: `await db.decr("visits");`
                },
                {
                    id: 'keys',
                    label: 'keys(path?)',
                    description: 'Get all keys (at optional path).',
                    usage: `await db.keys("users");`
                },
                {
                    id: 'values',
                    label: 'values(path?)',
                    description: 'Get all values.',
                    usage: `await db.values("users");`
                },
                {
                    id: 'entries',
                    label: 'entries(path?)',
                    description: 'Get all key-value entries.',
                    usage: `await db.entries("users");`
                },
                {
                    id: 'find',
                    label: 'find(path, predicate)',
                    description: 'Find an item in an array using a function.',
                    usage: `await db.find("users", u => u.id === 1);`
                },
                {
                    id: 'search',
                    label: 'search(query)',
                    description: 'Perform a full-text search.',
                    usage: `await db.search("Alice");`
                },
                {
                    id: 'query',
                    label: 'query(keyPrefix, filter)',
                    description: 'Advanced querying with filters ($gt, $eq, $in, etc.).',
                    usage: `await db.query("users", { age: { $gte: 18 } });`
                },
                {
                    id: 'expire',
                    label: 'expire(path, ttlMs)',
                    description: 'Set a Time-To-Live for a key.',
                    usage: `await db.expire("session", 5000);`
                },
                {
                    id: 'ttl',
                    label: 'ttl(path)',
                    description: 'Check remaining time for a key.',
                    usage: `await db.ttl("session");`
                },
                {
                    id: 'backup',
                    label: 'backup(filePath)',
                    description: 'Create a backup of the database.',
                    usage: `await db.backup("backup.json");`
                },
                {
                    id: 'restore',
                    label: 'restore(filePath)',
                    description: 'Restore from a backup.',
                    usage: `await db.restore("backup.json");`
                },
                {
                    id: 'export',
                    label: 'export()',
                    description: 'Export database as string/buffer.',
                    usage: `const data = await db.export();`
                },
                {
                    id: 'import',
                    label: 'import(obj)',
                    description: 'Import data from object.',
                    usage: `await db.import(data);`
                },
                {
                    id: 'transaction',
                    label: 'transaction(fn)',
                    description: 'Run atomic transaction block.',
                    usage: `await db.transaction(async tx => { ... });`
                }
            ]
        },
        {
            id: 'events-list',
            title: '📌 Events & Hooks',
            type: 'accordion',
            subsections: [
                { id: 'event-basic', title: 'Events' },
                { id: 'event-hooks', title: 'Hooks' }
            ],
            items: [
                {
                    id: 'event-set',
                    label: 'Event: "set"',
                    description: 'Emitted when a value is set/updated.',
                    usage: `db.on("set", ({ key, value }) => ...);`
                },
                {
                    id: 'event-delete',
                    label: 'Event: "delete"',
                    description: 'Emitted when a value is deleted.',
                    usage: `db.on("delete", (key) => ...);`
                },
                {
                    id: 'event-change',
                    label: 'Event: "change"',
                    description: 'Emitted on any change.',
                    usage: `db.on("change", (data) => ...);`
                },
                {
                    id: 'hook-pre',
                    label: 'pre(action, callback)',
                    description: 'Middleware to run BEFORE an action.',
                    usage: `db.pre("set", async ({ key, value }) => ...);`
                },
                {
                    id: 'hook-post',
                    label: 'post(action, callback)',
                    description: 'Middleware to run AFTER an action.',
                    usage: `db.post("delete", async ({ key }) => ...);`
                }
            ]
        }
    ]
};
