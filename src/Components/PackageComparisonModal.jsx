import { useEffect, useRef } from 'react';
import './PackageComparisonModal.css';

const PackageComparisonModal = ({ isOpen, onClose, serviceTitle, packages, navigateTo }) => {
  const modalRef = useRef(null);

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Lock background scroll
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // Unlock background scroll
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // 1. Compile list of concrete features (ignoring "Everything in X" placeholders)
  const concreteFeaturesSet = new Set();
  packages.forEach((pkg) => {
    pkg.features.forEach((feat) => {
      if (!feat.toLowerCase().startsWith('everything in')) {
        concreteFeaturesSet.add(feat);
      }
    });
  });
  const uniqueFeatures = Array.from(concreteFeaturesSet);

  // 2. Helper function to check if a package includes a feature
  const hasFeature = (pkg, feature, allPackages) => {
    // Direct inclusion check
    if (pkg.features.some((f) => f.toLowerCase() === feature.toLowerCase())) {
      return true;
    }

    // Parent package check (e.g. "Everything in Silver" or "Everything in Executive")
    for (const feat of pkg.features) {
      if (feat.toLowerCase().startsWith('everything in')) {
        const parentName = feat.toLowerCase().replace('everything in', '').trim();
        const parentPkg = allPackages.find((p) => p.name.toLowerCase() === parentName);
        if (parentPkg && hasFeature(parentPkg, feature, allPackages)) {
          return true;
        }
      }
    }

    return false;
  };

  // Close modal when clicking on the backdrop
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div className="compare-modal-backdrop" onClick={handleBackdropClick}>
      <div className="compare-modal-container" ref={modalRef}>
        {/* Modal Header */}
        <div className="compare-modal-header">
          <div className="header-text-container">
            <span className="compare-badge">COMPARISON MATRIX</span>
            <h2>{serviceTitle} Packages</h2>
            <p>Compare plans side-by-side to choose the perfect fit for your budget and requirements.</p>
          </div>
          <button className="compare-close-btn" onClick={onClose} aria-label="Close comparison modal">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Modal Content / Comparison Table */}
        <div className="compare-modal-body">
          <div className="compare-table-wrapper">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="feature-col-header">FEATURES & SERVICES</th>
                  {packages.map((pkg, idx) => (
                    <th key={idx} className={`package-col-header ${pkg.popular ? 'popular-col' : ''}`}>
                      {pkg.popular && <span className="popular-badge">MOST POPULAR</span>}
                      <h3 className="pkg-name">{pkg.name}</h3>
                      <div className="pkg-price-row">
                        <span className="pkg-price">{pkg.price}</span>
                      </div>
                      {pkg.capacity && <span className="pkg-capacity">{pkg.capacity}</span>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {uniqueFeatures.map((feature, fIdx) => (
                  <tr key={fIdx}>
                    <td className="feature-name-cell">{feature}</td>
                    {packages.map((pkg, pIdx) => {
                      const included = hasFeature(pkg, feature, packages);
                      return (
                        <td key={pIdx} className={`feature-status-cell ${pkg.popular ? 'popular-col' : ''}`}>
                          {included ? (
                            <span className="status-icon yes" aria-label="Included">
                              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                          ) : (
                            <span className="status-icon no" aria-label="Not Included">
                              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="empty-footer-cell"></td>
                  {packages.map((pkg, idx) => (
                    <td key={idx} className={`action-footer-cell ${pkg.popular ? 'popular-col' : ''}`}>
                      <button 
                        className={pkg.popular ? 'btn-filled' : 'btn-outline'} 
                        onClick={() => {
                          onClose();
                          navigateTo('get-quote');
                        }}
                      >
                        SELECT {pkg.name.toUpperCase()}
                      </button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageComparisonModal;
