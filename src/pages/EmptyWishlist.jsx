import RecentView from "../components/EmptyWishlist/RecentView"
import WishlistSection from "../components/EmptyWishlist/WishlistSection"

function EmptyWishlist() {
  return (
    <div id="empty-wishlist-page">
      <div id="wishlist-section">
        <WishlistSection />
      </div>
      <div id="recent-view-section">
        <RecentView />
      </div>
    </div>
  )
}

export default EmptyWishlist
