import React from 'react'
function Color(obj: any) {
    if (obj.add !== '/') {
        return (Component: any) => {
            class Ss extends React.Component {
                render() {
                    return (
                        <div>
                            <h1>404</h1>
                        </div>
                    );
                }
            }
            return Ss
        }
    } else {
        return (Component: any) => {
            class ColorS extends React.Component {
                render() {
                    return (
                        <div style={{ color: 'red', fontSize: '20px' }}>
                            <Component num={0} {...this.props} />
                        </div>
                    );
                }
            }
            return ColorS
        }
    }
}
export default Color