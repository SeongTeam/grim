import * as Icons from '@/components/ui/icons';
import { useCallback } from 'react';

interface DisplayMusicPlayerButtonProps {
    isDisplay: boolean;
    src: string;
}

const NavigatePlayerButton = ({ isDisplay, src }: DisplayMusicPlayerButtonProps) => {
    const openSmallWindow = useCallback(() => {
        const domainUrl = window.location.origin;
        const windowFeatures = 'width=412,height=732,top=100,left=100'; // 412 × 732
        const encodedMessage = encodeURIComponent(src); // 쿼리 파라미터로 안전하게 전달
        const url = `${domainUrl}/watch?message=${encodedMessage}`;

        window.open(url, '_blank', windowFeatures);
    }, [src]); // `src`를 의존성 배열에 추가

    return isDisplay ? (
        <div>
            <button
                onClick={openSmallWindow}
                className="absolute right-2 top-7 transform -translate-y-1/2 bg-black/20 text-black p-2 rounded-md"
            >
                <Icons.Headphones />
            </button>
        </div>
    ) : null;
};

export default NavigatePlayerButton;
