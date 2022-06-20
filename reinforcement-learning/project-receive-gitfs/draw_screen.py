class DrawScreen: 
    def __init__(self, screen, pygame):
        self.screen = screen
        self.pygame = pygame
    def drawRect(self, color, rect):
        self.pygame.draw.rect(self.screen, color, rect)