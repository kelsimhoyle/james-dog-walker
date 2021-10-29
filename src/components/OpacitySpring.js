import React from 'react'
import { Spring, animated } from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor'

const OpacitySpring = ({ children }) => {
  return (
      <div className="flex-1">
    <VisibilitySensor >
      {({ isVisible }) => (
        <Spring
          opacity={isVisible ? 1 : 0}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          delay={500}
          config={{ mass: 5, tension: 600, friction: 250, duration: 2000 }}
        >
          {(styles) => <animated.div style={styles}>{children}</animated.div>}
        </Spring>
      )}
    </VisibilitySensor>
    </div>
  )
}

export default OpacitySpring;