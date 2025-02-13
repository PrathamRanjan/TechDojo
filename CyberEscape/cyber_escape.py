import pygame
import random

# Initialize pygame
pygame.init()

# Screen dimensions
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Cyber Escape: The Phishing Attack")

# Colors
WHITE = (255, 255, 255)
GREEN = (0, 255, 0)  # Safe items
RED = (255, 0, 0)  # Moving phishing traps
PLAYER_COLOR = (0, 0, 255)

# Player setup
player_size = 40
player_x = WIDTH // 2
player_y = HEIGHT // 2
player_speed = 5

# Safe items (Green boxes)
safe_items = [pygame.Rect(random.randint(50, WIDTH-50), random.randint(50, HEIGHT-50), 30, 30) for _ in range(3)]

# Moving phishing traps (Red boxes)
phishing_traps = [pygame.Rect(random.randint(50, WIDTH-50), random.randint(50, HEIGHT-50), 40, 40) for _ in range(2)]
trap_speed = 2

# Digital Safety Questions
questions = [
    {
        "question": "What is the best way to create a strong password?",
        "options": ["Use 'password123'", "Use a mix of letters, numbers & symbols", "Use only your name", "Keep it short"],
        "correct": 1
    },
    {
        "question": "What should you do if you receive a suspicious email?",
        "options": ["Click the link immediately", "Ignore it", "Report it as phishing", "Forward to a friend"],
        "correct": 2
    },
    {
        "question": "Which of the following is NOT safe?",
        "options": ["Two-factor authentication", "Reusing passwords", "Updating software", "Checking URLs before clicking"],
        "correct": 1
    }
]

score = 0
game_over = False
question_active = False
current_question = None
trap_direction = [random.choice([-1, 1]) for _ in phishing_traps]

# Game loop
running = True
while running:
    screen.fill(WHITE)
    pygame.time.delay(30)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    keys = pygame.key.get_pressed()

    # Player movement
    if keys[pygame.K_LEFT] and player_x > 0:
        player_x -= player_speed
    if keys[pygame.K_RIGHT] and player_x < WIDTH - player_size:
        player_x += player_speed
    if keys[pygame.K_UP] and player_y > 0:
        player_y -= player_speed
    if keys[pygame.K_DOWN] and player_y < HEIGHT - player_size:
        player_y += player_speed

    # Move phishing traps
    for i, trap in enumerate(phishing_traps):
        trap.x += trap_speed * trap_direction[i]
        if trap.left <= 0 or trap.right >= WIDTH:
            trap_direction[i] *= -1  # Change direction on collision

    # Check collision with safe items
    for item in safe_items[:]:
        if pygame.Rect(player_x, player_y, player_size, player_size).colliderect(item):
            question_active = True
            current_question = random.choice(questions)
            safe_items.remove(item)

    # Check collision with phishing traps (Game Over)
    for trap in phishing_traps:
        if pygame.Rect(player_x, player_y, player_size, player_size).colliderect(trap):
            game_over = True

    # Draw Safe Items
    for item in safe_items:
        pygame.draw.rect(screen, GREEN, item)

    # Draw Phishing Traps
    for trap in phishing_traps:
        pygame.draw.rect(screen, RED, trap)

    # Draw Player
    pygame.draw.rect(screen, PLAYER_COLOR, (player_x, player_y, player_size, player_size))

    # Display Score
    font = pygame.font.Font(None, 36)
    score_text = font.render(f"Score: {score}", True, (0, 0, 0))
    screen.blit(score_text, (10, 10))

    # Show question
    if question_active:
        question_text = font.render(current_question["question"], True, (0, 0, 0))
        screen.blit(question_text, (50, HEIGHT // 2 - 50))
        for i, option in enumerate(current_question["options"]):
            option_text = font.render(f"{i+1}. {option}", True, (0, 0, 255))
            screen.blit(option_text, (50, HEIGHT // 2 + (i * 30)))

        keys = pygame.key.get_pressed()
        if keys[pygame.K_1]:  # Answer 1
            if current_question["correct"] == 0:
                score += 1
            question_active = False
        elif keys[pygame.K_2]:  # Answer 2
            if current_question["correct"] == 1:
                score += 1
            question_active = False
        elif keys[pygame.K_3]:  # Answer 3
            if current_question["correct"] == 2:
                score += 1
            question_active = False
        elif keys[pygame.K_4]:  # Answer 4
            if current_question["correct"] == 3:
                score += 1
            question_active = False

    # Display Game Over
    if game_over:
        game_over_text = font.render("Game Over! Press R to Restart", True, (255, 0, 0))
        screen.blit(game_over_text, (WIDTH // 3, HEIGHT // 2))
        keys = pygame.key.get_pressed()
        if keys[pygame.K_r]:  # Restart Game
            player_x, player_y = WIDTH // 2, HEIGHT // 2
            safe_items = [pygame.Rect(random.randint(50, WIDTH-50), random.randint(50, HEIGHT-50), 30, 30) for _ in range(3)]
            phishing_traps = [pygame.Rect(random.randint(50, WIDTH-50), random.randint(50, HEIGHT-50), 40, 40) for _ in range(2)]
            score = 0
            game_over = False

    pygame.display.flip()

pygame.quit()
