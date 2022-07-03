import pygame

color_red = (255, 0, 0)
class Cart(pygame.sprite.Sprite):
    def __init__(self, screen):
        super().__init__()
        self.screen = screen
        self.image = pygame.Surface([150, 10])
        pygame.draw.rect(self.image, color_red, pygame.Rect(0, 0, 150, 10))
        self.rect = self.image.get_rect()

    def moveLeft(self):
        if self.rect.x >= 5:
            self.rect.x -= 5

    def moveRight(self):
        if self.rect.x <= self.screen.get_width() - 5:
            self.rect.x += 5

    def detectKeyAction(self):
        key = pygame.key.get_pressed()
        if key[pygame.K_LEFT]:
            self.moveLeft()
        if key[pygame.K_RIGHT]:
            self.moveRight()
