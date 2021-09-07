import { Component } from '@angular/core';
import { IParticlesProps } from 'ng-particles';
import { Container, Main } from 'tsparticles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rickApp';

  id = "tsparticles";
    
    /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
    particlesUrl = "http://foo.bar/particles.json";
    
    /* or the classic JavaScript object */
    particlesOptions : IParticlesProps = {
        background: {
            color: {
                value: "#8bcf21"
            }
        },
        fpsLimit: 60,
        fullScreen:{
          enable: true,
          zIndex: -1
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onClick: {
                    enable: true,
                    mode: "push"
                },
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40
                },
                push: {
                    quantity: 0
                },
                repulse: {
                    distance: 0,
                    duration: 0,
                }
            }
        },
        particles: {
            color: {
                value: "#2f9331"
            },
            collisions: {
                enable: true
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    value_area: 500
                },
                value: 80
            },
            opacity: {
                value: 0.75
            },
            shape: {
                type: "circle"
            },
            size: {
                random: true,
                value: 5
            }
        },
        detectRetina: true
    };

    particlesLoaded(container: Container): void {
    }
    
    particlesInit(main: Main): void {
        // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    }


    

}
