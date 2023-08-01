export const avatarImage = (creatorAvatar: string) => {
  return creatorAvatar === 'test' || !creatorAvatar
    ? 'https://cdn.leonardo.ai/users/cb5f23fc-275a-422e-9e2e-8ca00cd4d119/generations/7563fe8f-e024-46ab-96a6-976c426e016f/DreamShaper_v7_create_a_simple_user_profile_image_ilustration_3.jpg'
    : creatorAvatar;
};

export const imagesUrl = {
  quizzGame:
    'https://cdn.leonardo.ai/users/cb5f23fc-275a-422e-9e2e-8ca00cd4d119/generations/97fcca3b-5ff9-4501-a629-d5a7f9225aac/SDXL_09_create_a_rounded_image_of_battle_about_game_quizz_type_3.jpg',
  quizzQuestion:
    'https://cdn.leonardo.ai/users/cb5f23fc-275a-422e-9e2e-8ca00cd4d119/generations/957c4800-3db4-43de-8f23-57939246d33e/SDXL_09_create_a_rounded_image_of_battle_about_game_quizz_type_0.jpg',
};
