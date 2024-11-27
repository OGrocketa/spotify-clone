import * as Slider from "@radix-ui/react-slider";
import './MusicSlider.css'
const MusicSlider = ()=>{


    return(
        <Slider.Root className="SliderRoot" defaultValue={[50]} max={100} step={1}>
            <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange"  />
            </Slider.Track>
            <Slider.Thumb  className="SliderThumb" aria-label="music-playback"/>
	    </Slider.Root>
    );
}

export default MusicSlider;