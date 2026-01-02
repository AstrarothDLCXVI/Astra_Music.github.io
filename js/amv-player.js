class AMVPlayer {
    constructor() {
        this.currentVideo = null;
        this.videoPlayer = document.getElementById('videoPlayer');
        this.videoPlayerSection = document.getElementById('videoPlayerSection');
        this.videoTitle = document.getElementById('videoTitle');
        this.videoArtist = document.getElementById('videoArtist');
        this.amvGrid = document.getElementById('amvGrid');
        
        this.initializeAMVs();
    }

    initializeAMVs() {
        const amvs = [
            {
                id: 'amv1',
                title: 'Unstoppable AMV',
                artist: 'The Score',
                videoFile: 'amv/Unstoppable.mp4',
                thumbnail: 'images/amv/thumbnails/unstoppable.jpg',
                duration: '3:45'
            },
            {
                id: 'amv2',
                title: 'Enemy AMV',
                artist: 'Sam Tinnesz',
                videoFile: 'amv/Enemy.mp4',
                thumbnail: 'images/amv/thumbnails/enemy.jpg',
                duration: '4:12'
            },
            {
                id: 'amv3',
                title: 'Stronger AMV',
                artist: 'The Score',
                videoFile: 'amv/Stronger.mp4',
                thumbnail: 'images/amv/thumbnails/stronger.jpg',
                duration: '3:28'
            },
            {
                id: 'amv4',
                title: 'Play With Fire AMV',
                artist: 'Sam Tinnesz',
                videoFile: 'amv/Play With Fire.mp4',
                thumbnail: 'images/amv/thumbnails/play_with_fire.jpg',
                duration: '3:56'
            },
            {
                id: 'amv5',
                title: 'In My Blood AMV',
                artist: 'The Score',
                videoFile: 'amv/In My Blood.mp4',
                thumbnail: 'images/amv/thumbnails/in_my_blood.jpg',
                duration: '4:03'
            },
            {
                id: 'amv6',
                title: 'Never Stay Down AMV',
                artist: 'Sam Tinnesz',
                videoFile: 'amv/Never Stay Down.mp4',
                thumbnail: 'images/amv/thumbnails/never_stay_down.jpg',
                duration: '3:37'
            },
            {
                id: 'amv7',
                title: 'Ghost AMV',
                artist: 'BoyWithUke',
                videoFile: 'amv/Ghost.mp4',
                thumbnail: 'images/amv/thumbnails/ghost.jpg',
                duration: '2:58'
            },
            {
                id: 'amv8',
                title: 'Evil Is My Middle Name AMV',
                artist: 'Society of Villains',
                videoFile: 'amv/Evil Is My Middle Name.mp4',
                thumbnail: 'images/amv/thumbnails/evil_is_my_middle_name.jpg',
                duration: '4:21'
            },
            {
                id: 'amv9',
                title: 'Stranger AMV',
                artist: 'BoyWithUke',
                videoFile: 'amv/Stranger.mp4',
                thumbnail: 'images/amv/thumbnails/stranger.jpg',
                duration: '3:14'
            },
            {
                id: 'amv10',
                title: 'Bloodshot AMV',
                artist: 'Sam Tinnesz',
                videoFile: 'amv/Bloodshot.mp4',
                thumbnail: 'images/amv/thumbnails/bloodshot.jpg',
                duration: '3:42'
            }
        ];

        this.displayAMVs(amvs);
    }

    displayAMVs(amvs) {
        this.amvGrid.innerHTML = amvs.map(amv => `
            <div class="amv-card" onclick="amvPlayer.playVideo('${amv.id}')">
                <img src="${amv.thumbnail}" alt="${amv.title}" class="amv-thumbnail" onerror="this.src='images/default-artist.svg'">
                <div class="amv-info">
                    <div class="amv-title">${amv.title}</div>
                    <div class="amv-artist">${amv.artist}</div>
                    <div class="amv-duration">${amv.duration}</div>
                </div>
            </div>
        `).join('');

        // Store AMV data for later use
        window.amvsData = amvs;
    }

    playVideo(amvId) {
        const amv = window.amvsData.find(a => a.id === amvId);
        if (!amv) return;

        this.currentVideo = amv;
        this.videoPlayer.src = amv.videoFile;
        this.videoTitle.textContent = amv.title;
        this.videoArtist.textContent = amv.artist;
        
        this.videoPlayerSection.style.display = 'block';
        this.videoPlayer.play();

        // Handle video error
        this.videoPlayer.onerror = () => {
            console.log(`No se pudo cargar el video: ${amv.videoFile}`);
            this.showVideoError(amv);
        };

        // Handle video end
        this.videoPlayer.onended = () => {
            this.playNextVideo();
        };
    }

    showVideoError(amv) {
        this.videoTitle.textContent = `Error: No se pudo cargar ${amv.title}`;
        this.videoArtist.textContent = 'Video no disponible';
    }

    playNextVideo() {
        const currentIndex = window.amvsData.findIndex(a => a.id === this.currentVideo.id);
        const nextIndex = (currentIndex + 1) % window.amvsData.length;
        const nextAmv = window.amvsData[nextIndex];
        
        setTimeout(() => {
            this.playVideo(nextAmv.id);
        }, 1000);
    }

    playPreviousVideo() {
        const currentIndex = window.amvsData.findIndex(a => a.id === this.currentVideo.id);
        const prevIndex = (currentIndex - 1 + window.amvsData.length) % window.amvsData.length;
        const prevAmv = window.amvsData[prevIndex];
        
        this.playVideo(prevAmv.id);
    }

    playRandomVideo() {
        const randomIndex = Math.floor(Math.random() * window.amvsData.length);
        const randomAmv = window.amvsData[randomIndex];
        
        this.playVideo(randomAmv.id);
    }
}

function closeVideo() {
    const videoPlayerSection = document.getElementById('videoPlayerSection');
    const videoPlayer = document.getElementById('videoPlayer');
    
    videoPlayer.pause();
    videoPlayerSection.style.display = 'none';
}

// Handle keyboard shortcuts
document.addEventListener('keydown', (e) => {
    const videoPlayerSection = document.getElementById('videoPlayerSection');
    
    if (videoPlayerSection.style.display === 'block') {
        switch(e.key) {
            case 'Escape':
                closeVideo();
                break;
            case 'ArrowLeft':
                amvPlayer.playPreviousVideo();
                break;
            case 'ArrowRight':
                amvPlayer.playNextVideo();
                break;
        }
    }
});

// Initialize AMV player
let amvPlayer;
document.addEventListener('DOMContentLoaded', () => {
    amvPlayer = new AMVPlayer();
});