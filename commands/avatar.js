const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("Exibe o avatar do usuário mencionado!")
        .addUserOption(option =>
            option.setName('usuário')
                .setDescription('O usuário para exibir o avatar')
                .setRequired(true)
        ),

    async execute(interaction) {
        const user = interaction.options.getUser('usuário') || interaction.user;
        const avatar = user.displayAvatarURL({ dynamic: true, format: 'png', size: 256 });
        await interaction.reply({ files: [avatar] });
        //await interaction.reply(`${user.username}'s avatar: ${avatar}`);
    }
}