from curses import window
import pygame
import draw_screen
pygame.init()
## create a window
wScreen = 400
hScreen = 500
screen = pygame.display.set_mode((wScreen, hScreen))
## create draw class
d = draw_screen.DrawScreen(screen, pygame)
## set variable for the game loop
running = True
while running:
    y=0
    d.drawRect((255, 0, 0), (0, y, 10, 10))
    y-=2
    event = pygame.event.poll()
    if event.type == pygame.QUIT:
        running = False
        break
    pygame.display.update()