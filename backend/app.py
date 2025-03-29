import webview
import os

# Get the absolute path to the frontend folder (this helps after packaging too)
frontend_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'frontend'))

webview.create_window(
    title="KingDev's Finance App",
    url=os.path.join(frontend_path, 'index.html'),
    width=1000,
    height=800,
    min_size=(900, 700),
    resizable=True
)

webview.start()