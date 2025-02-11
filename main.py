import pygame

# Initialize Pygame
pygame.init()

# Set up display
WIDTH, HEIGHT = 500, 500
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Simple Pygame with Pygbag")

# Colors
WHITE = (255, 255, 255)
BLUE = (0, 0, 255)

# Player setup
player_size = 50
player_x, player_y = WIDTH // 2, HEIGHT // 2
speed = 5

# Game loop
running = True
clock = pygame.time.Clock()
while running:
    screen.fill(WHITE)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT]:
        player_x -= speed
    if keys[pygame.K_RIGHT]:
        player_x += speed
    if keys[pygame.K_UP]:
        player_y -= speed
    if keys[pygame.K_DOWN]:
        player_y += speed

    pygame.draw.rect(screen, BLUE, (player_x, player_y, player_size, player_size))

    pygame.display.flip()
    clock.tick(30)

pygame.quit()
