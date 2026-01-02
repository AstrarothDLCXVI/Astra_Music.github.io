class MusicPlayer {
    constructor() {
        this.audioPlayer = document.getElementById('audioPlayer');
        this.currentSongIndex = 0;
        this.currentArtist = null;
        this.songs = [];
        this.isPlaying = false;
        
        this.initializeElements();
        this.initializeEventListeners();
        this.loadArtists();
    }

    initializeElements() {
        this.playBtn = document.getElementById('playBtn');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.volumeBtn = document.getElementById('volumeBtn');
        this.volumeSlider = document.getElementById('volumeSlider');
        this.progressBar = document.querySelector('.progress-bar');
        this.progress = document.getElementById('progress');
        this.currentTimeEl = document.getElementById('currentTime');
        this.totalTimeEl = document.getElementById('totalTime');
        this.currentSongTitle = document.getElementById('currentSongTitle');
        this.currentArtistName = document.getElementById('currentArtistName');
        this.currentSongImage = document.getElementById('currentSongImage');
        this.searchInput = document.getElementById('searchInput');
        this.artistsGrid = document.getElementById('artistsGrid');
        this.songsSection = document.getElementById('songsSection');
        this.songsList = document.getElementById('songsList');
        this.artistName = document.getElementById('artistName');
        this.backToArtists = document.getElementById('backToArtists');
        this.artistsSection = document.querySelector('.artists-section');
    }

    initializeEventListeners() {
        this.playBtn.addEventListener('click', () => this.togglePlay());
        this.prevBtn.addEventListener('click', () => this.playPrevious());
        this.nextBtn.addEventListener('click', () => this.playNext());
        this.volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
        this.progressBar.addEventListener('click', (e) => this.seekTo(e));
        this.searchInput.addEventListener('input', (e) => this.searchArtists(e.target.value));
        this.backToArtists.addEventListener('click', () => this.showArtists());
        
        this.audioPlayer.addEventListener('timeupdate', () => this.updateProgress());
        this.audioPlayer.addEventListener('loadedmetadata', () => this.updateDuration());
        this.audioPlayer.addEventListener('ended', () => this.playNext());
        
        this.volumeSlider.value = 70;
        this.audioPlayer.volume = 0.7;
    }

    loadArtists() {
        const artists = [
            {
                id: 'boywithuke',
                name: 'BoyWithUke',
                genre: 'Rock, Pop Emo',
                image: 'images/artists/boywithuke.jpg',
                songs: [
                    { title: 'Backseat', duration: '0:00', file: 'artists/boywithuke/Backseat.wav' },
                    { title: 'Burn', duration: '0:00', file: 'artists/boywithuke/Burn.wav' },
                    { title: 'Can You Feel It', duration: '0:00', file: 'artists/boywithuke/Can You Feel It.wav' },
                    { title: 'Change', duration: '0:00', file: 'artists/boywithuke/Change.wav' },
                    { title: 'Coffee', duration: '0:00', file: 'artists/boywithuke/Coffee.wav' },
                    { title: 'Corduroy', duration: '0:00', file: 'artists/boywithuke/Corduroy.wav' },
                    { title: 'Easier', duration: '0:00', file: 'artists/boywithuke/Easier.wav' },
                    { title: 'Ghost', duration: '0:00', file: 'artists/boywithuke/Ghost.wav' },
                    { title: 'Love Lost', duration: '0:00', file: 'artists/boywithuke/Love Lost.wav' },
                    { title: 'Paper Planes', duration: '0:00', file: 'artists/boywithuke/Paper Planes.wav' },
                    { title: 'Petrichor', duration: '0:00', file: 'artists/boywithuke/Petrichor.wav' },
                    { title: 'Pitfall', duration: '0:00', file: 'artists/boywithuke/Pitfall.wav' },
                    { title: 'Stranger', duration: '0:00', file: 'artists/boywithuke/Stranger.wav' }
                ]
            },
            {
                id: 'cristian_gates',
                name: 'Cri$tian Gate$',
                genre: 'Rock',
                image: 'images/artists/cristianGates.jpg',
                songs: [
                    { title: 'ALL IN', duration: '0:00', file: 'artists/cristian_gates/ALL IN.wav' },
                    { title: 'ARSON', duration: '0:00', file: 'artists/cristian_gates/ARSON.wav' },
                    { title: 'BABYDOLL', duration: '0:00', file: 'artists/cristian_gates/BABYDOLL.wav' },
                    { title: 'BLEED', duration: '0:00', file: 'artists/cristian_gates/BLEED.wav' },
                    { title: 'Dangerous State of Mind', duration: '0:00', file: 'artists/cristian_gates/Dangerous State of Mind.wav' },
                    { title: 'DIVE', duration: '0:00', file: 'artists/cristian_gates/DIVE.wav' },
                    { title: 'Food Poisoning', duration: '0:00', file: 'artists/cristian_gates/Food Poisoning.wav' },
                    { title: 'FREAK', duration: '0:00', file: 'artists/cristian_gates/FREAK.wav' },
                    { title: 'GIRLS', duration: '0:00', file: 'artists/cristian_gates/GIRLS.wav' },
                    { title: 'LIAR LIAR', duration: '0:00', file: 'artists/cristian_gates/LIAR LIAR.wav' },
                    { title: 'Lost', duration: '0:00', file: 'artists/cristian_gates/Lost.wav' },
                    { title: 'NUMB', duration: '0:00', file: 'artists/cristian_gates/NUMB.wav' },
                    { title: 'SAYING GOODBYE', duration: '0:00', file: 'artists/cristian_gates/SAYING GOODBYE.wav' },
                    { title: 'SECRETS', duration: '0:00', file: 'artists/cristian_gates/SECRETS.wav' },
                    { title: 'SHREDS', duration: '0:00', file: 'artists/cristian_gates/SHREDS.wav' },
                    { title: 'Star', duration: '0:00', file: 'artists/cristian_gates/Star.wav' },
                    { title: 'Stayin\' Up', duration: '0:00', file: 'artists/cristian_gates/Stayin\' Up.wav' },
                    { title: 'Traumatized', duration: '0:00', file: 'artists/cristian_gates/Traumatized.wav' }
                ]
            },
            {
                id: 'connor_kauffman',
                name: 'Connor Kauffman',
                genre: 'Rock',
                image: 'images/artists/connorKauffman.jpg',
                songs: [
                    { title: 'Bad High', duration: '0:00', file: 'artists/connor_kauffman/Bad High.wav' },
                    { title: 'Bad Neighborhood', duration: '0:00', file: 'artists/connor_kauffman/Bad Neighborhood.wav' },
                    { title: 'Bleed', duration: '0:00', file: 'artists/connor_kauffman/Bleed.wav' },
                    { title: 'Close Enough', duration: '0:00', file: 'artists/connor_kauffman/Close Enough.wav' },
                    { title: 'Cry', duration: '0:00', file: 'artists/connor_kauffman/Cry.wav' },
                    { title: 'Death Of Me', duration: '0:00', file: 'artists/connor_kauffman/Death Of Me.wav' },
                    { title: 'Heartless', duration: '0:00', file: 'artists/connor_kauffman/Heartless.wav' },
                    { title: 'Hostage', duration: '0:00', file: 'artists/connor_kauffman/Hostage.wav' },
                    { title: 'Novocaine', duration: '0:00', file: 'artists/connor_kauffman/Novocaine.wav' },
                    { title: 'Paranoid', duration: '0:00', file: 'artists/connor_kauffman/Paranoid.wav' },
                    { title: 'Parasite', duration: '0:00', file: 'artists/connor_kauffman/Parasite.wav' },
                    { title: 'Skin Of A Saint', duration: '0:00', file: 'artists/connor_kauffman/Skin Of A Saint.wav' },
                    { title: 'Thin Ice', duration: '0:00', file: 'artists/connor_kauffman/Thin Ice.wav' }
                ]
            },
            {
                id: 'jake_daniels',
                name: 'Jake Daniels',
                genre: 'Rock',
                image: 'images/artists/jakeDaniels.jpg',
                songs: [
                    { title: 'FCKED', duration: '0:00', file: 'artists/jake_daniels/FCKED.wav' },
                    { title: 'Problems', duration: '0:00', file: 'artists/jake_daniels/Problems.wav' },
                    { title: 'Show', duration: '0:00', file: 'artists/jake_daniels/Show.wav' }
                ]
            },
            {
                id: 'sam_tinnesz',
                name: 'Sam Tinnesz',
                genre: 'Pop Rock',
                image: 'images/artists/SamTinnesz.jpg',
                songs: [
                    { title: 'Bloodshot', duration: '0:00', file: 'artists/Sam_Tinnesz/Bloodshot.wav' },
                    { title: 'Enemy', duration: '0:00', file: 'artists/Sam_Tinnesz/Enemy.wav' },
                    { title: 'Never Stay Down', duration: '0:00', file: 'artists/Sam_Tinnesz/Never Stay Down.wav' },
                    { title: 'Play With Fire', duration: '0:00', file: 'artists/Sam_Tinnesz/Play With Fire.wav' }
                ]
            },
            {
                id: 'society_of_villains',
                name: 'Society of Villains',
                genre: 'Rock',
                image: 'images/artists/society_of_villains.jpg',
                songs: [
                    { title: 'Evil Is My Middle Name', duration: '0:00', file: 'artists/Society_of_Villains/Evil Is My Middle Name.wav' },
                    { title: 'Made A Monster', duration: '0:00', file: 'artists/Society_of_Villains/Made A Monster.wav' }
                ]
            },
            {
                id: 'the_score',
                name: 'The Score',
                genre: 'Pop Rock',
                image: 'images/artists/theScore.jpg',
                songs: [
                    { title: 'Born For This', duration: '0:00', file: 'artists/the_score/Born For This.wav' },
                    { title: 'Fire', duration: '0:00', file: 'artists/the_score/Fire.wav' },
                    { title: 'In My Blood Remix', duration: '0:00', file: 'artists/the_score/In My Blood Remix.wav' },
                    { title: 'In My Blood', duration: '0:00', file: 'artists/the_score/In My Blood.wav' },
                    { title: 'Stronger', duration: '0:00', file: 'artists/the_score/Stronger.wav' },
                    { title: 'Unstoppable', duration: '0:00', file: 'artists/the_score/Unstoppable.wav' }
                ]
            },
            {
                id: 'unlike_pluto',
                name: 'Unlike Pluto',
                genre: 'Rock',
                image: 'images/artists/unlike_pluto.jpg',
                songs: [
                    { title: 'Hollow', duration: '0:00', file: 'artists/Unlike_Pluto/Hollow.wav' }
                ]
            },
            {
                id: 'unroyal',
                name: 'Unroyal',
                genre: 'Rock',
                image: 'images/artists/unroyal.jpg',
                songs: [
                    { title: 'BANG', duration: '0:00', file: 'artists/unroyal/BANG.wav' },
                    { title: 'Monster', duration: '0:00', file: 'artists/unroyal/Monster.wav' }
                ]
            }
        ];

        this.displayArtists(artists);
        window.artistsData = artists;
        this.updateStats(artists);
    }

    displayArtists(artists) {
        this.artistsGrid.innerHTML = artists.map(artist => `
            <div class="artist-card" onclick="player.showArtistSongs('${artist.id}')">
                <img src="${artist.image}" alt="${artist.name}" class="artist-image" onerror="this.src='images/default-artist.jpg'">
                <div class="artist-name">${artist.name}</div>
                <div class="artist-genre">${artist.genre}</div>
            </div>
        `).join('');
    }

    showArtistSongs(artistId) {
        const artist = window.artistsData.find(a => a.id === artistId);
        if (!artist) return;

        this.currentArtist = artist;
        this.songs = artist.songs;
        this.currentSongIndex = 0;

        this.artistName.textContent = artist.name;
        this.songsList.innerHTML = artist.songs.map((song, index) => `
            <div class="song-item ${index === this.currentSongIndex ? 'active' : ''}" onclick="player.playSong(${index})">
                <div class="song-number">${index + 1}</div>
                <div class="song-info">
                    <div class="song-title-small">${song.title}</div>
                    <div class="song-duration">${song.duration}</div>
                </div>
            </div>
        `).join('');

        this.artistsSection.style.display = 'none';
        this.songsSection.style.display = 'block';
    }

    showArtists() {
        this.artistsSection.style.display = 'block';
        this.songsSection.style.display = 'none';
    }

    searchArtists(query) {
        if (!query) {
            this.displayArtists(window.artistsData);
            return;
        }

        const filtered = window.artistsData.filter(artist => 
            artist.name.toLowerCase().includes(query.toLowerCase()) ||
            artist.genre.toLowerCase().includes(query.toLowerCase()) ||
            artist.songs.some(song => song.title.toLowerCase().includes(query.toLowerCase()))
        );

        this.displayArtists(filtered);
    }

    playSong(index) {
        if (index < 0 || index >= this.songs.length) return;

        this.currentSongIndex = index;
        const song = this.songs[index];

        this.audioPlayer.src = song.file;
        this.audioPlayer.play();
        this.isPlaying = true;
        this.playBtn.textContent = '⏸';

        this.currentSongTitle.textContent = song.title;
        this.currentArtistName.textContent = this.currentArtist.name;
        this.currentSongImage.src = this.currentArtist.image;

        document.querySelectorAll('.song-item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });

        this.audioPlayer.onerror = () => {
            console.log(`No se pudo cargar: ${song.file}`);
            this.nextSong();
        };
    }

    togglePlay() {
        if (!this.audioPlayer.src) {
            if (this.songs.length > 0) {
                this.playSong(0);
            }
            return;
        }

        if (this.isPlaying) {
            this.audioPlayer.pause();
            this.playBtn.textContent = '▶';
        } else {
            this.audioPlayer.play();
            this.playBtn.textContent = '⏸';
        }
        this.isPlaying = !this.isPlaying;
    }

    playPrevious() {
        if (this.songs.length === 0) return;
        
        this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
        this.playSong(this.currentSongIndex);
    }

    playNext() {
        if (this.songs.length === 0) return;
        
        this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
        this.playSong(this.currentSongIndex);
    }

    setVolume(value) {
        this.audioPlayer.volume = value / 100;
        this.volumeBtn.textContent = value == 0 ? '🔇' : value < 50 ? '🔉' : '🔊';
    }

    seekTo(e) {
        const rect = this.progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        this.audioPlayer.currentTime = percent * this.audioPlayer.duration;
    }

    updateProgress() {
        if (this.audioPlayer.duration) {
            const percent = (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100;
            this.progress.style.width = percent + '%';
            this.currentTimeEl.textContent = this.formatTime(this.audioPlayer.currentTime);
        }
    }

    updateDuration() {
        this.totalTimeEl.textContent = this.formatTime(this.audioPlayer.duration);
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    updateStats(artists) {
        const totalArtists = artists.length;
        const totalSongs = artists.reduce((sum, artist) => sum + artist.songs.length, 0);
        
        const totalArtistsEl = document.getElementById('totalArtists');
        const totalSongsEl = document.getElementById('totalSongs');
        
        if (totalArtistsEl) totalArtistsEl.textContent = totalArtists;
        if (totalSongsEl) totalSongsEl.textContent = totalSongs;
    }
}

let player;
document.addEventListener('DOMContentLoaded', () => {
    player = new MusicPlayer();
});