from multiprocessing.reduction import steal_handle
from typing import overload
from draw_screen import DrawScreen

class Cart:
    def __init__(self, screen, pygame, x, y):
        self.d = DrawScreen(screen, pygame)
        self.x = x
        self.y = y
    def updatePosition(self):
        self.d.drawRect((255,0,0),(self.x, self.y, 10, 10))
    def moveLeft(self):
        self.x -= 5
    def moveRight(self):
        self.x += 5
