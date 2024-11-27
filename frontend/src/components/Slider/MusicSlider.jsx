import * as Slider from "@radix-ui/react-slider";
import './MusicSlider.css'
const MusicSlider = ({currentTime, duration,onValueCommit})=>{


    return(
        <Slider.Root className="SliderRoot"  max={duration} step={1} value={[currentTime]} onValueCommit={onValueCommit} >
            <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange"  />
            </Slider.Track>
            <Slider.Thumb  className="SliderThumb" aria-label="music-playback"/>
	    </Slider.Root>
    );
}

export default MusicSlider;