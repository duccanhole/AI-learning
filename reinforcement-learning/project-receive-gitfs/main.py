import pygame
from cart import Cart
pygame.init()
# create a window
wScreen = 800
hScreen = 500
screen = pygame.display.set_mode((wScreen, hScreen))

clock = pygame.time.Clock()

cart = Cart(screen)
cart.rect.x = 20
cart.rect.y = 480

pygame.display.set_caption('game test')

# sprite
sprite_list = pygame.sprite.Group()
sprite_list.add(cart)
# set variable for the game loop
running = True
while running:
    for e in pygame.event.get():
        if e.type == pygame.QUIT:
            running = False
            
    cart.detectKeyAction()
        
    sprite_list.update()
    screen.fill(0)
    sprite_list.draw(screen)
    pygame.display.flip()
    clock.tick(60)

pygame.quit()
