const discord = require('discord.js');
module.exports = async(client, queue, track) => {
    if (!queue.metadata) return console.log("Not metadata")

    let a = await queue.metadata.translate("MUSIC_ADDED")
    const channel = queue.metadata.channel;
    let embed = new discord.MessageEmbed()
        .setColor(queue.metadata.guild.settings.color)
        .setTitle(a)
        .setDescription(`[${track.title}](${track.url})[<@${track.requestedBy.id}>]`)
    channel.send({ embeds: [embed] })
};