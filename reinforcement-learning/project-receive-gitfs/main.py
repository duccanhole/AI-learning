import pygame
from cart import Cart
pygame.init()
# create a window
wScreen = 400
hScreen = 500
screen = pygame.display.set_mode((wScreen, hScreen))

clock  = pygame.time.Clock()

cart = Cart(screen, pygame, 20, 450)
# set variable for the game loop
running = True

while running:
    for e in pygame.event.get():
        if e.type == pygame.QUIT:
            running = False
        elif e.type == pygame.KEYDOWN:
            if e.key == pygame.K_LEFT:
                cart.moveLeft()
            elif e.key == pygame.K_RIGHT:
                cart.moveRight()
    screen.fill((0,0,0))
    cart.updatePosition()
    pygame.display.update()
    clock.tick(60)
pygame.quit()
