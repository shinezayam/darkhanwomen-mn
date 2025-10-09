'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  ZoomIn, 
  ZoomOut, 
  RotateCw, 
  Maximize2, 
  Minimize2,
  ChevronLeft,
  ChevronRight,
  FileText,
  Calendar,
  User
} from 'lucide-react';

interface PDFReaderProps {
  pdfUrl: string;
  title: string;
  description?: string;
  author?: string;
  date?: string;
  locale: 'mn' | 'en';
}

export default function PDFReader({ 
  pdfUrl, 
  title, 
  description, 
  author, 
  date, 
  locale 
}: PDFReaderProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(30); // Set reasonable default
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title;
    link.click();
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 300));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  // Update iframe when page or zoom changes
  useEffect(() => {
    if (iframeRef.current) {
      const newSrc = `${pdfUrl}#page=${currentPage}&zoom=${zoom}&toolbar=0&navpanes=0&scrollbar=1`;
      iframeRef.current.src = newSrc;
    }
  }, [currentPage, zoom, pdfUrl]);

  return (
    <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-white' : ''}`}>
      <Card className={`${isFullscreen ? 'h-full border-0 rounded-none' : 'card-modern'} overflow-hidden`}>
        <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 border-b">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                {title}
              </CardTitle>
              {description && (
                <p className="text-gray-600 text-sm mb-2">{description}</p>
              )}
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                {author && (
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{author}</span>
                  </div>
                )}
                {date && (
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{date}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownload}
                className="hover:bg-pink-50"
              >
                <Download className="w-4 h-4 mr-2" />
                {locale === 'mn' ? 'Татах' : 'Download'}
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={toggleFullscreen}
                className="hover:bg-pink-50"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-pink-100">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleZoomOut}
                disabled={zoom <= 50}
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              
              <span className="text-sm font-medium min-w-[60px] text-center">
                {zoom}%
              </span>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleZoomIn}
                disabled={zoom >= 300}
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleRotate}
              >
                <RotateCw className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePreviousPage}
                disabled={currentPage <= 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <span className="text-sm font-medium min-w-[80px] text-center">
                {currentPage} / {totalPages}
              </span>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {/* PDF Viewer */}
        <div 
          className={`${isFullscreen ? 'h-[calc(100vh-140px)]' : 'h-[600px]'} overflow-auto bg-gray-100 relative`}
        >
          <div
            style={{
              transform: `rotate(${rotation}deg) scale(${zoom / 100})`,
              transformOrigin: 'center center',
              transition: 'transform 0.2s ease-in-out',
              width: '100%',
              height: '100%'
            }}
          >
            <iframe
              ref={iframeRef}
              src={`${pdfUrl}#page=${currentPage}&zoom=100&toolbar=0&navpanes=0&scrollbar=1`}
              className="w-full h-full border-0"
              title={title}
              onLoad={() => {
                console.log('PDF loaded successfully');
              }}
              onError={() => {
                console.log('PDF failed to load');
              }}
            />
          </div>
        </div>

        {/* Keyboard Shortcuts Help */}
        {isFullscreen && (
          <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs p-3 rounded-lg">
            <div className="space-y-1">
              <div>{locale === 'mn' ? 'Товчлуур:' : 'Shortcuts:'}</div>
              <div>← → {locale === 'mn' ? 'хуудас' : 'pages'}</div>
              <div>+ - {locale === 'mn' ? 'зураас' : 'zoom'}</div>
              <div>R {locale === 'mn' ? 'эргүүлэх' : 'rotate'}</div>
              <div>ESC {locale === 'mn' ? 'гаралт' : 'exit'}</div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}