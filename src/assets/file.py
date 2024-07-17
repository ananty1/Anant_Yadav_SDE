import matplotlib.pyplot as plt

# Data to plot
labels = ['Data Structures and Algorithms', 'Full Stack Development', 'Machine Learning']
sizes = [60, 20, 15]
colors = ['#1f77b4', '#ff7f0e', '#2ca02c']
explode = (0.1, 0, 0)  # explode 1st slice (Data Structures and Algorithms)

# Plot
fig, ax = plt.subplots(figsize=(8, 8), facecolor='#f0f0f0')  # Set figure background color to greyish
ax.set_facecolor('#f0f0f0')  # Set axes background color to greyish

# Create the pie chart
wedges, texts, autotexts = ax.pie(sizes, explode=explode, labels=labels, colors=colors, autopct='%1.1f%%', shadow=True, startangle=140)

# Customize the text properties
for text in texts + autotexts:
    text.set_color('black')

# Equal aspect ratio ensures that pie is drawn as a circle
ax.axis('equal')

# Title
plt.title('Work Distribution of Total Working Hours')

# Save the figure
plt.savefig('work_distribution_pie_chart.png', format='png', dpi=300)

# Display the plot
plt.show()
