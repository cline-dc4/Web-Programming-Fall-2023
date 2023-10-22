function ShowClassInfo()
{
    return(
    <div>
        <h1>Music Theory I</h1>
        <p>
            This class studies the basic harmonic elements of music,<br/>
            with emphasis on notation, scales, intervals, triads,<br/>
            key signatures, and beginning 4-part voice leading.<br/>
            Here is a link to Musescore, a helpful free music notation<br/>
            that is very useful for this class:
            <a href="https://musescore.com/">Musescore</a>
        </p>


    </div>);
}

function ShowDescriptionList()
{
    return(
    <div>
        <dl>
            <dt><b> DAW </b></dt>
                <dd>
                    This stands for digital audio workstation, it is a
                    powerful tool used to produce music.
                </dd>
            <dt><b> Key </b></dt>
                <dd>
                    A key determine the notes a song uses. Different keys make
                    music sound different, and variations in songs sometimes 
                    come from changing the key in the middle. This is one of the 
                    things I want to learn more about in theory.
                </dd>
            <dt><b> Chord </b></dt>
                <dd>
                    Another thing I want to learn more about, these are constructed
                    with multiple specific notes to make a new sound. There are normally chords
                    heard in the background of music we listen to and help the rest of
                    the song sound better and highlight the melody of the music.
                </dd>
            <dt><b> Melody </b></dt>
                <dd>
                    The part of the song you would most often hum. This is the main 
                    part of the song that is brought out, and if there are lyrics to
                    a song the person singing is most likely singing the melody.
                </dd>
        </dl>
    </div>)
}

function DisplayAllComponents()
{
    return(
    <div>
        <ShowClassInfo/>
        <ShowDescriptionList/>
    </div>);
}

export default DisplayAllComponents;